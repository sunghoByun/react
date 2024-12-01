import PropTypes from "prop-types";

export function Member() {
}

function TypeProp(props) {
    console.log(props);
    return <p>결과는 콘솔에서 확인하기 바란다.</p>;
}

TypeProp.propTypes = {
    prop6: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['남성', '여성', '기타'])
    })
};

export default TypeProp;