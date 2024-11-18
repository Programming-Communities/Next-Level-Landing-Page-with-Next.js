import Button from "@/components/Button";
import designExampletImage from "@/assets/images/design-example-1.png";
import designExzmple2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image
                        src={designExampletImage}
                        alt="Desig example 1 image"
                    />
                </div>
                <div className="absolute -right-64 top-16 hidden lg:block">
                    <Image
                        src={designExzmple2Image}
                        alt="Design example 2 image"
                    />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    Member 401 Programming Communities 
                </div>
                </div>
                <h1 className="text-6xl md:text-7x1 lg:text-8xl font-medium text-center mt-6">
                    Programming  Communities
                </h1>
            </div>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Everyone Don&apos;t Miss Opportunity. First Learn Then Earn.
                Web Designing, English Speaking Course, Web, TypeScript,
                 Next js.
            </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input
                    type="email "
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap"
                    size="sm"
                >
                    Sign Up
                </Button>
            </form>
        </section>
    );
}
