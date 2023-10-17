export class Donation {
    _id?: string;
    name!: string;
    email!: string;
    quantity!: number;
    donation_date?: Date;
    payment_method!: string;
    isActive?: boolean;
}