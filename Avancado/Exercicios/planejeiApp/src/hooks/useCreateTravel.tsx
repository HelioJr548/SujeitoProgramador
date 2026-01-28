import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { supabase } from '../config/supabase';

const travelSchema = z.object({
	title: z
		.string()
		.nonempty('O nome da viagem é obrigatório')
		.min(1, 'O nome da viagem é obrigatório'),
	city: z
		.string()
		.nonempty('A cidade / estado é obrigatório(a)')
		.min(1, 'A cidade / estado é obrigatório(a)'),
	hotel_adress: z
		.string()
		.nonempty('O endereço do hotel é obrigatório')
		.min(1, 'O endereço do hotel é obrigatório'),
	start_date: z.string().min(1, 'A data de partida é obrigatória'),
	end_date: z.string().min(1, 'A data de volta é obrigatória'),
});

export type TTravelFormData = z.infer<typeof travelSchema>;

const useCreateTravel = () => {
	const [userId, setUserId] = useState<null | string>(null);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TTravelFormData>({
		resolver: zodResolver(travelSchema),
	});

	useEffect(() => {
		const fetchUser = async () => {
			const { data, error } = await supabase.auth.getUser();

			if (error) return error;

			setUserId(data?.user.id ?? null);
		};

		fetchUser();
	});

	const createNewTravel = async (data: TTravelFormData) => {
		console.log(data);
	};

	return { control, handleSubmit, errors, isSubmitting, createNewTravel };
};

export default useCreateTravel;
