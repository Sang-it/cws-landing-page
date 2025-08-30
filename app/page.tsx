export default function HomePage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter text-balance uppercase">
                            C-stem
                            <br />
                            Web Services newww
                        </h1>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                        <p className="pt-20 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty font-medium">
                            Hosting Infrastructure for Caldwell University (Beta)
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
