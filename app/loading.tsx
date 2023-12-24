import { Metadata } from "next"

export const metadata: Metadata = {
    title: "loading..."
}

export default function Loading() {
    return (
        <>
            <div className="bg-background flex items-center justify-center h-[80vh]">
                <section className="container">
                    <div
                        className="block mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-foreground motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                    <h1 className="text-6xl text-center font-extrabold font-KBO-Dia-Gothic_bold">loading...</h1>
                </section>
            </div>
        </>
    )
}
