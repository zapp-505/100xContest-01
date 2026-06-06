import Button from "./button";
import { useEffect, useRef, useState } from "react";

export function Otp1({ number }) {
    const ref = useRef([])
    const [disabled, setDisabled] = useState(true);
    const [values, setValues] = useState(Array(number).fill(""))

    useEffect(() => {
        setDisabled(values.some((value) => value === ""))
    }, [values])

    const handleValueChange = (value, index) => {
        const nextValue = value.slice(-1)
        const newValues = [...values]
        newValues[index] = nextValue
        setValues(newValues)

        if (nextValue !== "" && index + 1 < number) {
            ref.current[index + 1]?.focus()
        }
    }

    const handleBackspace = (index) => {
        if (values[index] !== "") {
            const newValues = [...values]
            newValues[index] = ""
            setValues(newValues)
            return
        }

        if (index > 0) {
            ref.current[index - 1]?.focus()
        }
    }

    return (
        <div className="flex justify-center">
            {values.map((x, index) => (
                <SubOtpBox
                    reference={e => ref.current[index] = e}
                    key={index}
                    index={index}
                    value={x}
                    onDone={(val) => handleValueChange(val, index)}
                    goBack={() => handleBackspace(index)}
                />
            ))}

            <Button disabled={disabled}>Signup</Button>
        </div>
    )
}

function SubOtpBox({
    reference, index, value, onDone, goBack
}) {
    return (
        <div>
            <input
                value={value}
                ref={reference}
                maxLength={1}
                inputMode="numeric"
                onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                        e.preventDefault();
                        goBack(index);
                    }
                }}
                onChange={(e) => onDone(e.target.value)}
                type="text"
                className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
            />
        </div>
    )



}