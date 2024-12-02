import {useForm} from "react-hook-form";

export default function FormBasic() {
    const defaultValues = {
        name: '홍길동',
        email: 'admin@example.com',
        gender: 'male',
        memo: '',

    };

    const {register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm({defaultValues: defaultValues});

    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                console.log(data);
            }, 4000);

        });
    }
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor={'name'}>이름 : </label><br/>
                <input id={"name"} type={"text"}
                       {...register('name', {
                           required: '이름은 필수 입력 항목입니다.',
                           maxLength: {
                               value: 20,
                               message: '이름은 20자 이내로 작성해주세요'
                           }
                       })
                       }/>
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor={"gender"}>성별 : </label><br/>
                <label>
                    <input type={"radio"} value={"male"}
                           {...register('gender', {
                               required: '성별은 필수 입니다.',
                           })
                           }/> 남성
                </label>
                <label>
                    <input type={"radio"} value={"female"}
                           {...register('gender', {
                               required: '성별은 필수 입니다.',
                           })
                           }/> 여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor={"email"}>이메일 주소: </label><br/>
                <input id={"email"} type={"email"}
                       {...register('email', {
                           required: '이메일 주소는 필수 입력 사항입니다.',
                           pattern: {
                               value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                               message: '이메일 주소 형식이 잘못되었습니다.',

                           }
                       })}/>
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor={"memo"}>메모 :</label>
                <br/>
                <textarea id={"memo"}
                          {...register('memo', {
                              required: '비고는 필수 입력항목 입니다.',
                              minLength: {
                                  value: 10,
                                  message: '메모는 10자 이상으로 작성해주세요.',
                              },
                              validate: {
                                  rule1: (value, formValues) => {
                                      const ngs = ['폭력', '죽음', '그로테스크'];

                                      for (const ng of ngs) {
                                          if (value.includes(ng)) {
                                              return '비고에 적절하지 않은 단어가 포함되어 있습니다.';
                                          }
                                      }

                                      return true;
                                  }
                              }
                          })
                          }/>
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type={"submit"} disabled={!isDirty || !isValid || isSubmitting}>제출하기</button>
                {isSubmitting && <div>...제출 중...</div>}
            </div>
        </form>
    );
};