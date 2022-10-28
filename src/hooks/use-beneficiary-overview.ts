import { Contract } from 'ethers';
import { IBeneficiaryOverview } from '../interfaces/beneficiaryOverview.interface';
import { JsonRpcProvider } from '@ethersproject/providers';
import { VESTING_SCHEDULE_ADDRESS } from '../constants/blockchain';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useBeneficiaryOverview = () => {
    const getBeneficiaryOverview = async (
        provider: JsonRpcProvider,
        account: string,
    ): Promise<IBeneficiaryOverview[]> => {
        const vestingScheduleContract = new Contract(
            VESTING_SCHEDULE_ADDRESS,
            vestingScheduleAbi,
            provider,
        );
        try {
            return await vestingScheduleContract.callStatic.getBeneficiaryOverview(
                account,
            );
        } catch (e) {
            return [];
        }
    };

    return {
        getBeneficiaryOverview,
    };
};
