function SoftSkills(){
    const Card = ({ title, content, shadowColor }: { title: string; content: string; shadowColor: string; }) => (
        <div className="flex flex-col text-black py-[20px] pl-[40px] pr-[30px] lg:h-[400px] border-l border-b border-black/30 z-20" style={{ backgroundColor: "#f5f5f5" }} >
            <h2 
                className="lg:text-[48px] font-semibold backdrop-blur-[4px]"
                style={{ textShadow: `4px 4px 4px ${shadowColor}` }}
            >{title}</h2>
            <p 
                className="lg:text-[32px] leading-[39px] backdrop-blur-[4px]"
                style={{ textShadow: `4px 4px 4px ${shadowColor}` }}
            ><br/>{content}</p>
        </div>
    );
    
    return (
        <main className="lg:pb-[200px]">
            <div className="absolute max-w-[1200px] px-8 inset-0 mx-auto pointer-events-none">
                <div
                    className="absolute top-0 bottom-0 w-px bg-black opacity-30"
                    style={{
                    left: `0%`,
                    }}
                />
                <div
                    className="absolute top-0 w-px bg-black bottom-30 opacity-30"
                    style={{
                    left: `50%`,
                    }}
                />
                <div
                    className="absolute top-[1200px] w-px bg-black bottom-130 z-50 opacity-30"
                    style={{
                    left: `75%`,
                    }}
                />
                <div
                    className="absolute top-0 w-px bg-black bottom-100 opacity-30"
                    style={{
                    left: `100%`,
                    }}
                />
            </div>
            <div className="grid grid-cols-2">
                <Card 
                    title="communication"
                    content="I act as a translator between clients, teams, and stakeholders, simplifying technical jargon and ensuring smooth operations across every stage of a project."
                    shadowColor="rgba(219,255,0,0.4)"
                />
                <div className="relative lg:h-[400px] border-b border-black/30">
                    <div 
                        className="absolute top-0 bottom-0 w-px bg-black opacity-30"
                        style={{ left: `50%`}}
                    />
                </div>

                <div className="relative lg:h-[400px] border-b border-black/30 ">
                    <div 
                        className="absolute top-0 bottom-0 w-px bg-black opacity-30"
                        style={{ left: `50%`}}
                    />
                </div>
                
                <Card
                    title="leadership"
                    content="I approach teams with a flexible and people-first system balancing both individual needs and institutional requirements."
                    shadowColor="rgba(54,208,218,0.4)"                
                />

                <Card
                    title="problem solving"
                    content="Leveraging my formal background in physics I can simplify and solve complex problems, and also understand its underlying real-world interpretation."
                    shadowColor="rgba(228,147,205,0.4)"
                />

                <div className="relative lg:h-[400px] border-b border-black/30 ">
                    <div 
                        className="absolute bottom-0 w-px bg-black top-40 opacity-30"
                        style={{ left: `50%`}}
                    />
                </div>

                <div className="relative lg:h-[400px]">
                {/* Borde desde mitad hacia la derecha */}
                <div className="absolute bottom-0 w-1/3 border-b left-2/3 border-black/30" />

                {/* Línea vertical */}
                <div 
                    className="absolute top-0 w-px bg-black bottom-40 opacity-30"
                    style={{ left: `50%` }}
                />
                </div>

                <Card
                    title="delivery"
                    content="Focused on my craft, I always aim for perfection and success, both in time and performance. I prioritize client needs to guarantee a smooth delivery and surpass expectations."
                    shadowColor="rgba(106,237,94,0.4)"
                />
            </div>
        </main>
    );
}

export default SoftSkills;