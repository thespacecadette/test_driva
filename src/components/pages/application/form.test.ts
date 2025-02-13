import {expect, describe, it} from '@jest/globals';
import { FormFields, isValidThreshold, loanRuleViolation } from './form';

describe('pages > application > form > isValidThreshold', () => {
    it('should fail if fields are pristine and fields are empty', () => {
        const dirtyFields: Partial<FormFields> = { };
        const values: FormFields = {
            firstName: '',
            lastName: '',
            email: '',
            employmentStatus: '',
            employerName: '',
            vehiclePrice: '',
            deposit: '',
            loanPurpose: '',
            loanTermYears: '',
          };
        const expected = false;
        const actual = isValidThreshold(dirtyFields, values);

        expect(expected).toEqual(actual);
    });
    it('should fail if fields are dirty but loan rule isnt met', () => {
        const dirtyFields: any = {
            vehiclePrice: true,
            deposit: true,
        };
        const values: FormFields = {
            firstName: '',
            lastName: '',
            email: '',
            employmentStatus: '',
            employerName: '',
            vehiclePrice: '40000',
            deposit: '39000',
            loanPurpose: '',
            loanTermYears: '',
          };
        const expected = false;
        const actual = isValidThreshold(dirtyFields, values);

        expect(expected).toEqual(actual);
    });
    it('should pass if fields are dirty and loan rule is met', () => {
        const dirtyFields: any = {
            vehiclePrice: true,
            deposit: true,
        };
        const values: FormFields = {
            firstName: '',
            lastName: '',
            email: '',
            employmentStatus: '',
            employerName: '',
            vehiclePrice: '40000',
            deposit: '5000',
            loanPurpose: '',
            loanTermYears: '',
        };
        const expected = true;
        const actual = isValidThreshold(dirtyFields, values);

        expect(expected).toEqual(actual);
    });
})