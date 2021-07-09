declare namespace ApiResponseNS {

    interface IEWalletTransactions {
        _id: string; 
        amount: string; 
        createdAt: string; 
        status: string; 
        transactionId: string, 
        type: string, 
        updatedAt: string,
    }

    interface IGasTransactions {
        _id: string; 
        cost: number; 
        createdAt: string;
        eWalletTransactionId: string; 
        fuelPrice: number; 
        fuelType: string; 
        otp: string; 
        pId: string; 
        quantity: string; 
        status: string;
        transactionId: string; 
        updatedAt: string;
    }

    interface IProfileDataApiResponse {
        balance: string;
        eWalletTransactions: IEWalletTransactions[]; 
        email: string;
        gasTransactions: IGasTransactions[]; 
        gender: string;
        isVerified: boolean; 
        phone: number;
        username: string;
    }

}