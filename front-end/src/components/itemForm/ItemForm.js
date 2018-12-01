import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../common/inputField/InputField';
import Button from '../common/button/Button';
import submitIcon from '../../assets/Orion_paper-plane.png'

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="d-flex justify-content-center">{label}</div>
    <div>
      <InputField inputContainerClassName='shadow-sm' style={styles.inputFieldStyle} input={input} isInvalidCond={touched && error}  placeholder={label}  />
    </div>
  </div>
)

const onSubmit = (data) =>{
    console.log(data);
}

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="container bg-white"   style={styles.containerStyle} onSubmit={handleSubmit(onSubmit)}>
         <style>{'body { background-color: #F8F9F9}'}</style>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="item name"
        validate={required}
      />
      <Field
        name="place"
        type="text"
        component={renderField}
        label="place"
        validate={required}
      />
        <div className="d-flex justify-content-center">description</div>
      <Field style={styles.textAreaStyle}
        name="description"
        type="textarea"
        component="textarea"
        label="description"
        validate={required}
      />
      <div className="d-flex justify-content-center">
          <label className=" shadow-sm" style={styles.radioLabelStyle}>
            <Field style={styles.radioStyle}
              name="type"
              component="input"
              type="radio"
              value="lost"
            />{' '}
            Lost
          </label>
          <label  className="shadow-sm" style={styles.radioLabelStyle}>
            <Field style={styles.radioStyle}
              name="type"
              component="input"
              type="radio"
              value="found"
            />{' '}
            Found
          </label>
        </div>
      <div>
      <Button onClick={handleSubmit(onSubmit)} hasborder={true} clickable={true} type="submit" /* className='d-flex' style={{border: '1px solid #eee'}} */ 
                    img={<div className=" align-items-center justify-content-center d-flex shadow-sm" style={{borderRadius: '50%',width:'30px',height:'30px'}}>
                     <img width="24px" height="24px" src={submitIcon} /></div>}/>
      </div>
    </form>
  )
}

const styles={
    containerStyle:{
        border: '1px solid #ddd',
        marginTop:'3%',
        marginBottom:'3%',
        borderRadius:'5px 5px 5px 5px',
       minWidth:'300px',
       maxWidth:'600px',
       padding:'2%'
    },
    inputFieldStyle:{
        borderRadius:'50px' ,
        overflow:'hidden',
        border: '1px solid #ddd',
    },
    textAreaStyle:{
        width:"100%",
        borderRadius:'50px' ,
        overflow:'hidden',
        border: '1px solid #ddd',
        outline: 'none',
        textIndent:'5px'

    },
    radioLabelStyle:{
        borderRadius:'50px',
        padding:'1%'
    },
    radioStyle:{
       // visibility:'hidden'
    }
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)