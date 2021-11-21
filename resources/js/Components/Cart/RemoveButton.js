const RemoveButton = (props) => {
    return (
        <button className={props.className} onClick={()=>props.onRemove(props.product, props.productColor, props.productSize)}>{props.children}</button>
    );
};

export default RemoveButton;
