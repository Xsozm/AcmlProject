import React , {Component} from 'react';

class InputField extends Component{
    state = {isInvalidViewText:false}

    render(){
        const {value,
            onTextChange,
            input,
            placeholder,
            isInvalidCond,width,
             height,row,
             element,
             inputContainerClassName,
             inputClassName,
             style,
             invalidText,
             minWidth,maxWidth} = this.props;

        const heightCond = height? {height:height} : {height:'30px'}
        const widthCond = width? {width:width} : {width:'100%'}
        const minWidthCond = minWidth? {minWidth:minWidth} : {minWidth:'100%'}
        const maxWidthCond = maxWidth? {maxWidth:width} : {maxWidth:'100%'}
        const isInvalidProps  = isInvalidCond ? {border:'1px solid #dc3545'} : null
        return(
            <div  style={{...widthCond,...minWidthCond,...maxWidthCond}}  >
                    <div style={{...styles.inputContainerStyle,...style,...isInvalidProps}} className={` align-items-center d-flex ${row} ${inputContainerClassName} `}>
                        <input {...input||''} placeholder={placeholder||''} value={value}  
                        onChangeCapture={ onTextChange} 
                        autoSave={'false'} autoComplete={'false'} type="text" style={styles.inputStyle={...styles.inputStyle,...heightCond}} className={`${inputClassName}`} />
                        {element}
                    </div>
          {isInvalidCond && invalidText ? <span style={styles.invalidTextStyle}>{invalidText}</span>:''}
          {isInvalidCond ? <span style={styles.invalidTextStyle}>{isInvalidCond}</span>:''}
            </div>
        )
    }

   
}

const styles = {
    inputStyle:{
        outline:'none',
        borderStyle:'none',
        textIndent:'',
        height:'30px',
        paddingLeft:'5px',
        width:'100%'

    },
    invalidTextStyle:{
        fontSize: '80%',
        color: '#dc3545'
    },
    inputContainerStyle:{
       

    }
}

export default InputField;

