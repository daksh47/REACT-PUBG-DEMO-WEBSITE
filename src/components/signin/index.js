import React from 'react'
import { SignCard,SignHead,SignName,SignLogin,Card } from './singincomp'

const Sign = () => {
  return (
    <SignCard id="signin">
        <Card>
        <SignHead>Enter Your Details</SignHead>
        <SignName><p>Username :</p><input></input></SignName>
        <SignName><p>Password :</p><input type="password"></input></SignName>
        <SignLogin>LOGIN !</SignLogin>
        </Card>
    </SignCard>
  )
}

export default Sign