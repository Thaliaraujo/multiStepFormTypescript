import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IRegister {
    id: number;
    name: string;
    email: string;
    phone: number;
    company: string;
    service: string[];
    price: string;
};

const getAll = async (): Promise<IRegister[] | ApiException> => {
    try {
        const {data} = await Api().get('/register');
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar registros')
    };
};

const getById = async (id: number): Promise<IRegister | ApiException> => {
    try {
        const {data} = await Api().get(`/register/${id}`);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar registro')
    };
};

const create = async (dataToCreate: Omit<IRegister, 'id'>): Promise<IRegister[] | ApiException> => {
    try {
        const {data} = await Api().post<any>('/register', dataToCreate);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar criar registro')
    };
};
   
const updateById = async (id: number, dataToUpdate: IRegister): Promise<IRegister[] | ApiException> => {
    try {
        const {data} = await Api().put(`/register/${id}`, dataToUpdate);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro')
    };
};
   
const deleteById  = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/register/${id}`);
        return undefined;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao deletar registro')
    };
};

export const RegisterService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};