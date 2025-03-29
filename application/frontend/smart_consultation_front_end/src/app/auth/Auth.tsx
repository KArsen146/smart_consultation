'use client'

import { InputField } from "@/components/layouts/ui/filed/InputField"
import { authService } from "@/services/auth.service"
import { IAuthForm } from "@/types/auth.types"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export function Auth(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IAuthForm>({
        mode: 'onChange',
        defaultValues: {
            login: '',
            password: ''
        }
    });
    const {refresh} = useRouter()
    const [errorFoundUser, setErrorField] = useState(false)
    const {mutate} = useMutation({
        mutationKey: ['signIn'],
        mutationFn: (data:IAuthForm) => authService.auth(data),
        onSuccess(){
            reset()
            refresh()
        },
        onError(error){
            const msg = error.cause
            let newErrors = false
            if (msg == "")  newErrors = true;
            setErrorField(newErrors)
        }
    })

    const onSubmit: SubmitHandler<IAuthForm> = data => mutate(data)

    return <form className="absolute right-[50%] translate-x-2/4 bg-bg  border-main border-[3px] 
     w-[504px] h-[507px] top-[22%]" onSubmit={handleSubmit(onSubmit)}>
           <div className='absolute text-[32px] right-1/2 translate-x-2/4 font-roboto top-[24px]'>
           Авторизация</div>  

           <div className='absolute text-[32px] font-roboto top-[115px] left-[24px]'>
                Логин</div>  
            <div className="absolute text-[32px] font-roboto top-[161px] left-[24px] ">
            <InputField
                  {...register('login', 
                    {required: 'Необходимо ввести логин'})}
                    id='login' placeholder="your_login"  w={456} h={40} text={20} border={2}
                    state={errors.login ? 'error' : 'default'}/>
            {errors.login && (
                    <p className="text-error-text text-sm mt-1">{errors.login.message}</p>
                )}
            </div>
            
            <div className='absolute text-[32px] font-roboto top-[230px] left-[24px]'>
                Пароль</div> 
            <div className='absolute text-[32px] font-roboto top-[276px] left-[24px]'>
            <InputField
                {...register('password', 
                { required: 'Необходимо ввести пароль' })}
                id="password"
                type="password" withEye={true} placeholder="your_password" w={456} h={40} text={20} border={2}
                state={errors.password ? 'error' : 'default'}/>
            {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>
            <button  type="submit"
                 className="absolute translate-x-2/4 right-1/2  w-[210px] h-[49px] 
                bg-main font-roboto text-[32px] top-[380px]" role="presentation"  
                disabled={Object.keys(errors).length > 0}>
                    Войти
            </button> 
            {errorFoundUser && (
                <div className="absolute translate-x-2/4 right-1/2 top-[443px] 
                text-center leading-none
                w-[332px] 
                font-roboto text-[20px] text-error-text">
                Неверно введен логин или пароль. Попробуйте снова
            </div>
            )}        
    </form>
}
