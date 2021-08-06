import React from "react";
import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i)

    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", async () => {
    render (<CheckoutForm />)
    const firstInput = screen.getByLabelText('First Name:')
    const lastInput = screen.getByLabelText('Last Name:')
    const addInput = screen.getByLabelText('Address:')
    const cityInput = screen.getByLabelText('City:')
    const stateInput = screen.getByLabelText('State:')
    const zipInput = screen.getByLabelText('Zip:')
    const submitButton = screen.getByRole('button')

    userEvent.type(firstInput,'Charles')
    userEvent.type(lastInput,'Qian')
    userEvent.type(addInput,'123 Address Lane')
    userEvent.type(cityInput,'Real City')
    userEvent.type(stateInput,'CA')
    userEvent.type(zipInput,'11111')
    userEvent.click(submitButton)

    await waitFor(() => {
        expect(screen.queryByTestId('successMessage')).toBeInTheDocument()
    })
    //expect ( screen.getByText(/you have ordered some plants/i)).toBeInTheDocument()
});
