"use client"

interface AnimatedTextProps {
  text: string
  delay?: number
}

export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  let characterIndex = 0

  return (
    <span>
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block">
          {word.split("").map((char) => {
            const index = characterIndex++
            return (
              <span
                key={`${char}-${index}`}
                className="inline-block animate-letter-in"
                style={{ animationDelay: `${delay + index * 0.03}s`, opacity: 0 }}
              >
                {char}
              </span>
            )
          })}
          {wordIndex < text.split(" ").length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </span>
  )
}
