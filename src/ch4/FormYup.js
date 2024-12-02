import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
    name: yup
        .string()
        .label('이름')
        .required('${label}은 필수 입력입니다.')
        .max(20, '${label}은 ${max}자 이내로 입력하세요.')
        .trim().lowercase()
    ,
    gender: yup
        .string()
        .label('성별')
        .required('${label}은 필수 입력입니다.')
    ,
    email: yup
        .string()
        .label('이메일 주소')
        .required('${label}은 필수 입력입니다.')
        .email('${label}의 형식이 잘못되었습니다.'),
    memo: yup
        .string()
        .label('비고')
        .required('${label}은 필수 입력입니다.')
        .min(10, '${label}은 ${min}자 이상으로 입력하세요.')
        .test('ng', ({label})=>`${label}에 적절하지 않은 단어가 포함되어 있습니다.`, value => {
            const ngs = ['폭력', '죽음', '그로테스크'];
            for (const ng of ngs) {
                if (value.includes(ng)) {
                    return false;
                }
            }
            return true;
        })
});

export default function FormYup() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '홍길동',
            email: 'admin@example.com',
            gender: 'male',
            memo: '',
        },
        resolver: yupResolver(schema),

    });

    const onSubmit = data => console.log(data);
    const onError = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div>
                <label htmlFor={'name'}>이름 : </label><br/>
                <input id={"name"} type={"text"}
                       {...register('name')}/>
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor={"gender"}>성별 : </label><br/>
                <label>
                    <input type={"radio"} value={"male"}
                           {...register('gender')}/> 남성
                </label>
                <label>
                    <input type={"radio"} value={"female"}
                           {...register('gender')}/> 여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor={"email"}>이메일 주소: </label><br/>
                <input id={"email"} type={"email"}
                       {...register('email')}/>
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor={"memo"}>메모 :</label>
                <br/>
                <textarea id={"memo"}
                          {...register('memo')}/>
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type={"submit"} >제출하기</button>
            </div>
        </form>
    );
};