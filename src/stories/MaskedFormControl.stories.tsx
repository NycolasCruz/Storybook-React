import { Meta, StoryObj } from "@storybook/react";

import { MaskedFormControl } from "../components/MaskedFormControl";

export default {
    title: "Components/MaskedFormControl",
    component: MaskedFormControl,
    decorators: [
        (Story) => (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "85vh" 
            }}>
                {Story()}
            </div>
        )
    ]
} as Meta;

export const NumberMask = {
    args: {
        mask: Number,
        placeholder: "Digite um número",
    }
} as StoryObj;

export const DateMask = {
    args: {
        mask: "00/00/0000",
        placeholder: "Digite uma data",
    }
} as StoryObj;

export const PhoneMask = {
    args: {
        mask: "(00) 00000-0000",
        placeholder: "Digite um telefone",
    }
} as StoryObj;

export const CpfMask = {
    args: {
        mask: "000.000.000-00",
        placeholder: "Digite um CPF",
    }
} as StoryObj;

export const CnpjMask = {
    args: {
        mask: "00.000.000/0000-00",
        placeholder: "Digite um CNPJ",
    }
} as StoryObj;

export const CepMask = {
    args: {
        mask: "00000-000",
        placeholder: "Digite um CEP",
    }
} as StoryObj;

