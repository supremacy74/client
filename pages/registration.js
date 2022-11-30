import Wrapper from '../layouts/Wrapper'

import Form from '../components/Form'

import styles from '../styles/modules/Auth.module.css'

const Registration = () => {

    const options = [
        {
            title: 'name',
            placeholder: 'John',
            hint: 'Your name should consist only of letters. The length of this value should be from 1 to 15 characters.'
        },
        {
            title: 'surname',
            placeholder: 'Doe',
            hint: 'Your name should consist only of letters. The length of this value should be from 1 to 15 characters.'
        },
        {
            title: 'email',
            placeholder: 'email@email.com',
            hint: 'Your name should consist only of letters. The length of this value should be from 1 to 15 characters.'
        },
        {
            title: 'password',
            placeholder: 'YourUniquePassword555',
            hint: 'Your name should consist only of letters. The length of this value should be from 1 to 15 characters.'
        }
    ]

    return (
        <div>
            <Wrapper>
                <Form heading={'Registration'} options={options} button={'Sign Up'} />
            </Wrapper>
        </div>
    )

}

export default Registration