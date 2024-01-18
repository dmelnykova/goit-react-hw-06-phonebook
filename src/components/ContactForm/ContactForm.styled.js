import styled from 'styled-components';

import {
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikError,
} from 'formik';

export const Wrapper = styled.div`
    width: 400px;
    margin-top: 50px;
    margin-left: 50px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: whitesmoke;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Field = styled(FormikField)`
    padding: 5px;
`;

export const ErrorMessage = styled(FormikError)`
    color: orange;
    font-size: 24px;
`;

export const Button = styled.button`
    height: 35px;
    background-color: tan;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.5s ease;
    &:hover,
    &:focus {
    color: white;
    background-color: steelblue;
    outline: none;}
`;