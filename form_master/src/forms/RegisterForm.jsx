import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../schemas/registerSchema';
import FormInput from '../components/FormInput';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro</h2>
      <FormInput label="Nome" type="text" name="name" register={register} error={errors.name} />
      <FormInput label="E-mail" type="email" name="email" register={register} error={errors.email} />
      <FormInput label="Senha" type="password" name="password" register={register} error={errors.password} />
      <button type="submit" style={{ padding: '10px 20px' }}>Cadastrar</button>
    </form>
  );
};

export default RegisterForm;
