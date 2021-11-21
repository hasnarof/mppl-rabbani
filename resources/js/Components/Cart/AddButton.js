const AddButton = (props) => {
    return (
        <button className={props.className} onClick={()=>props.onAdd(props.product, props.productColor, props.productSize)}>{props.children}</button>
    );
};

export default AddButton;
