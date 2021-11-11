import LoginPage from '../screens/ExistingUserLoginPage'
import React from 'react'
import {render} from '@testing-library/react-native'
import { idText } from 'typescript'

test('Render login page', () => {
    
    const {getAllByText, getByPlaceholderText } =render(<LoginPage/>)
    getByPlaceholderText("admin")
    getByPlaceholderText("wrongPassword")
    console.log("runnign")
})