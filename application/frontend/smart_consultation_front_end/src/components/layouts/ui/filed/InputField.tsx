import {forwardRef, useState} from 'react'
import Image from 'next/image';

interface InputFieldProps{
    id: string
    placeholder?: string
    state?: 'error' | 'default'
    type?: 'text' | 'password' | 'email' | 'number'
    extra?: string
    w?: Number
    h?: Number
    border?: number,
    text?: Number
    autocomplete?: 'off' | 'on',
    withEye?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({
        id,
        type,
        placeholder,
        state,
        extra,
        w,
        h,
        text,
        border,
        withEye = false,
        autocomplete,
        ...rest
    }, ref) =>{
        const [showPassword, setShowPassword] = useState(false);
        const inputType = withEye 
          ? (showPassword ? 'text' : 'password')
          : type;

        const stateClasses = {
          error: 'bg-error-input',
          default: 'bg-secondary'
        };

        return (
          <div className="relative" style={{ width: w ? `${w}px` : '100%' }}>
            <input
              ref = {ref}
              id = {id}
              type = {inputType}
              placeholder = {placeholder}
              autoComplete = 'off'
              className={`
                w-full
                ${state ? stateClasses[state] : stateClasses.default} 
                border-main
                pl-3
                focus:outline-none
                focus:border-[${border ? border + 2 : 4}px]
              `}
              style={{
                height: h ? `${h}px` : undefined,
                fontSize: text ? `${text}px` : undefined,
                borderWidth: border ? `${border}px` : undefined,
              }}
              {...rest}
            />
            
            {withEye && (
          <div className="absolute right-2 top-1 h-full flex">
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}>
              <Image 
                src="/eye.svg"
                alt="Toggle password"
                width={32}
                height={32}
              />
            </button>
          </div>
        )}
          </div>
    );
  }
);

InputField.displayName ='field'
