export interface IinputProps {
    placeholder: string;
    name: string;
    value: string;
    handlerChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}