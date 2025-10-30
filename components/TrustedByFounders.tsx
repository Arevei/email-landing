import { Star } from "lucide-react"
import Image from "next/image"

const TrustedByFounders = () => {
  return (
    <section className="pb-16 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Trusted by Founders</h3>

          <Image
            src="/R1.jpg"
            alt="Google Reviews"    
            width={600}
            height={150}
            className="mx-auto w-[60%] max-w-md"
          />
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">Reviews on Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedByFounders
