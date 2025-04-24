import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Subsidiary = {
    id: string
    title: string
    description: string
    logoUrl: string
    imageUrl: string
    url?: string
}


export function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
    return (
        <Link target="_blank" href={subsidiary.url ?? "#"} className={cn(`rounded-lg  shadow-md shadow-[#23194b]  flex flex-col items-center text-center relative h-[350px] w-[250px] md:h-[350px] md:w-[300px] lg:h-[400px] lg:w-[350px] bg-[#0e0a1e] hover:border-2 hover:scale-110 transition-all duration-150 border-eblue`, subsidiary.id === "nfc-rent" && "border-[#785bf1]",)}>
            <div className="p-4">
                <div className="flex items-center justify-center">
                    <Image
                        src={subsidiary.logoUrl || "/placeholder.svg"}
                        alt={`${subsidiary.title} Logo`}
                        width={170}
                        height={200}
                        className="object-contain h-[100px] w-[100px]"
                    />
                </div>
            </div>

            <h3 className={cn("text-eblue font-bold text-xl", subsidiary.id === "nfc-rent" && "text-[#785bf1]")}>{subsidiary.title}</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-[80%] mx-auto">{subsidiary.description}</p>
            <div className="absolute -bottom-8 w-full left-0 h-[150px]">
                <div className="relative h-full w-full">
                    <Image
                        src={subsidiary.imageUrl || "/placeholder.svg"}
                        alt={`${subsidiary.title} product`}
                        fill
                        className={`object-contain rotate-[170deg] object-bottom scale-125`}
                    />
                </div>
            </div>
        </Link>
    )
}

export function SubsidiariesSection() {
    const subsidiaries: Subsidiary[] = [{
        id: "nfc-rent",
        title: 'NFC',
        url: 'https://nfcrent.com',
        description: 'Revolutionizing digital asset management with NFT & blockchain technology',
        imageUrl: '/images/nfc-car.png',
        logoUrl: '/images/nfc-rent.svg',
    }, {
        id: "The Universe Eye",
        title: 'The Universe Eye',
        url: 'https://theuniverseye.com',
        description: 'Crafting immersive worlds through advanced AR, VR, MR and AI-driven environments',
        imageUrl: '/images/universe-eye.png',
        logoUrl: '/images/the-universe-eye.svg',
    }]

    return (
        <div className="py-8 lg:py-16 cursor-pointer">
            <div className="main-container">
                <p className="text-center max-w-[782px] font-bold uppercase mx-auto mb-8">Elchai is a team of dedicated developers specializing in al, metaverse, blockchain, and web3 technologies-passionate about crafting extraordinary, intelligent digital solutions that redefine what's possible</p>

                <h2 className="main-title mb-12 text-center lg:text-left">Explore Our <span>Innovative Subsidiaries</span></h2>
                <div className="flex justify-around flex-wrap">
                    {subsidiaries.map((subsidiary) => (
                        <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} />
                    ))}
                </div>
            </div>
        </div>
    )
}