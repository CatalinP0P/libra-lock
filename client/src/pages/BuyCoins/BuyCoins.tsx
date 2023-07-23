import React from 'react';
import Layout from '../../Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import * as colors from '../../static/colors';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import circlesBackground from '../../assets/backgrounds/Version1 DC.png';
import triangleBackground from '../../assets/backgrounds/Triangle1.png';
import pBackground from '../../assets/backgrounds/Version1 P.png';

import { useTheme } from '../../context/ThemeContext';

const offers = [
    { coins: 100, price: 5 },
    { coins: 250, price: 10 },
    { coins: 500, price: 15 },
];

export default function BuyCoins() {
    const { theme } = useTheme();

    return (
        <Layout>
            <Container className="flex flex-col gap-16 py-32">
                <label className="flex flex-col gap-2">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Buy website credits
                    </h2>
                    <label>
                        With website credits you can buy or rent all kind of
                        different books
                    </label>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => {
                        return (
                            <CoinsCard
                                key={offer.coins}
                                price={offer.price}
                                coins={offer.coins}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Note
                    </h2>
                    <label>
                        Website Credits are non-refundable and do not expire,
                        offer customers a flexible and convenient way to shop
                        online. With these credits, customers have the freedom
                        to choose from a wide range of books without the
                        pressure of an expiration date, these credits provide a
                        secure form of payment that can be used at their
                        convenience. By being non-refundable, businesses can
                        ensure that customers fully commit to their purchase
                        decisions, resulting in a more stable revenue stream and
                        a stronger customer-business relationship. This system
                        fosters trust and loyalty, as customers can rely on the
                        value of their credits for future purchases without the
                        worry of losing them due to expiration.
                    </label>
                </div>
            </Container>
        </Layout>
    );
}

const CoinsCard = ({ price, coins }: { coins: number; price: number }) => {
    const { theme } = useTheme();
    return (
        <div
            className={
                'relative rounded-md flex flex-col items-center shadow-xl w-full border overflow-hidden ' +
                (theme == 'dark'
                    ? ' bg-secondary/5 text-white'
                    : ' bg-white text-primary')
            }
        >
            <img
                className="absolute top-0 right-0 w-[100px] h-fit z-[0] me-2"
                src={circlesBackground}
            />
            <img
                className="absolute bottom-0 right-0 h-[75px] w-fit z-[0]  me-6 mb-2"
                src={triangleBackground}
            />
            <img
                className="absolute left-[-2px] top-[-2px] h-[200px] z-[0]"
                src={pBackground}
            />

            <label className="flex flex-row items-center text-6xl font-bold gap-2 pt-16 pb-24 z-[1]">
                {coins}
                <CoinSVG
                    height={64}
                    width={64}
                    fill={theme == 'dark' ? colors.white : colors.primary}
                />
            </label>

            <Button className="w-full z-[1]" rounded={false} variant='primary' >
                Buy for {price}€
            </Button>
        </div>
    );
};
