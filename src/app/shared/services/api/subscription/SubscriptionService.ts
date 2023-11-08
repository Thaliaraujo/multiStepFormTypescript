import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";
export interface ISubscription {
    id: number;
    email: string;
};

const getAll = async (): Promise<ISubscription[] | ApiException> => {
    try {
        const {data} = await Api().get('/subscription');
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar registros')
    };
};

const getById = async (id: number): Promise<ISubscription | ApiException> => {
    try {
        const {data} = await Api().get(`/subscription/${id}`);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar registro')
    };
};

const create = async (dataToCreate: Omit<ISubscription, 'id'>): Promise<ISubscription[] | ApiException> => {
    try {
        const {data} = await Api().post<any>('/subscription', dataToCreate);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao consultar criar registro')
    };
};
   
const updateById = async (id: number, dataToUpdate: ISubscription): Promise<ISubscription[] | ApiException> => {
    try {
        const {data} = await Api().put(`/subscription/${id}`, dataToUpdate);
        return data;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao atualizar o registro')
    };
};
   
const deleteById  = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/subscription/${id}`);
        return undefined;
    } catch(error: any) {
        return new ApiException(error.message || 'Erro ao deletar registro')
    };
};

export const SubscriptionService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};