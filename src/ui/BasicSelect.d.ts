export default function useBasicSelect({ options, maintext }: {
    options: string[] | number[];
    maintext: string;
}): [string | number, React.FC];
