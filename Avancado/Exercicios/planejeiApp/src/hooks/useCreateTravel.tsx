import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { supabase } from '../config/supabase';
import { travelServices } from '../services/travel-services';

const travelSchema = z.object({
	title: z
		.string()
		.nonempty('O nome da viagem é obrigatório')
		.min(1, 'O nome da viagem é obrigatório'),
	city: z
		.string()
		.nonempty('A cidade / estado é obrigatório(a)')
		.min(1, 'A cidade / estado é obrigatório(a)'),
	hotel_address: z
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
		reset,
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
		if (!userId) return;

		try {
			await travelServices.createTravel(data, userId);
			reset();
			router.replace('/(panel)/home/page');
		} catch (err) {
			console.error('ERROR AO CADASTRAR VIAGEM: ', err);
		}
	};

	return { control, handleSubmit, errors, isSubmitting, createNewTravel };
};

export default useCreateTravel;
