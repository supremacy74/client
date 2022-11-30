import Wrapper from '../layouts/Wrapper'

import Form from '../components/Form'

import styles from '../styles/modules/Auth.module.css'

const Authorization = () => {

    const options = [
        {
            title: 'email',
            placeholder: 'email@email.com'
        },
        {
            title: 'password',
            placeholder: 'YourUniquePassword555'
        }
    ]

    return (
        <div>
            <Wrapper>
                <Form heading={'Authorization'} options={options} button={'Sign In'} />
            </Wrapper>
        </div>
    )

}

export default Authorization