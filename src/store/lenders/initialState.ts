export interface Lender {
	monthlyRepayment: number;
	interestRate: number;
	fees: number;
	name: string;
}

export interface LenderStore {
	lenders: Array<Lender>;
}

const lenderStore: LenderStore = {
	lenders: [],
};

export default lenderStore;
