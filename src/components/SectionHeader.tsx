interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-xl max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </div>
  )
}