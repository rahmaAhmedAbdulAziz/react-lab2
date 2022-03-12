import React from 'react'

function Form(props) {
    // const {rahma} = props.rahma

    const name = props.rahma
  return (

    <div className='create'>
  <form>
  <div class="mb-3 p-3 container">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">required</div>
  </div>
  <div class="mb-3 container">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onclick="myFunction()" type="submit" class="btn btn-primary">Submit</button>
</form>
  
{/* <Add/> */}

    </div>
  )
}

export default Form ;