import { useConfig } from '../hooks/use-config';

export const isPositionActive = (
    tokenA: string,
    tokenB: string,
    liquidity: number,
) => {
    const { getPool } = useConfig();
    return !!getPool(tokenA, tokenB) && liquidity > 0;
};
