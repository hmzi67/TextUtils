import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.ty} alert-dismissible fade show mt-5`} role="alert">
        <strong>{capitalize(props.alert.ty)}:</strong> {props.alert.msg}
    </div>
  )
}
