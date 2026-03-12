import Title from './Title';
import { plansData } from '../assets/dummy-data';
import { CheckIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
    const navigate = useNavigate();

    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Pricing"
                    heading="Pricing Plans"
                    description="Our Pricing Plans are simple, transparent and flexible. Choose the plan that best suits your needs."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-4">
                    {plansData.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${plan.popular
                                    ? 'border-indigo-500/60 bg-indigo-500/10 shadow-xl shadow-indigo-500/10 scale-[1.03]'
                                    : 'border-white/10 bg-white/5 hover:border-white/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-5">{plan.desc}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-gray-400 text-sm ml-1">/ one-time</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckIcon className="size-4 text-indigo-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <PrimaryButton
                                onClick={() => navigate('/generate')}
                                className={`w-full justify-center py-3 rounded-xl ${!plan.popular ? 'opacity-80 hover:opacity-100' : ''}`}
                            >
                                Get Started
                            </PrimaryButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};