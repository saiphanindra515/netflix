let InputCustomComp = (props) => {
    const { label, onChangeFun } = props;
    return   <span className="parent-input">
    <input type="text" placeholder=" " onChange={(e) => onChangeFun(e)} className="input-text"></input>
    <label className="form-label"> {label} </label>
    </span>
}

export default InputCustomComp;