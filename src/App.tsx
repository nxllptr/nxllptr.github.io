import Header from './components/common/Header'
import Quote from './components/common/Quote'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-12 py-8 bg-gray-800 rounded-lg m-4">
      {children}
    </div>
  )
}

function App() {
  const socialLinks=[
    { url: "https://medium.com/@nxllptr", name: "Medium" },
    { url: "https://www.reddit.com/user/nxllptr/", name: "Reddit" },
    { url: "mailto:nxllptr@proton.me", name: "Email" },
    { url: "https://www.youtube.com/@nxllptr", name: "YouTube" }
  ]

  const codeLinks=[
    { url: "https://github.com/nxllptr", name: "GitHub" },
    { url: "https://gitlab.com/nxllptr", name: "GitLab" }
  ]

  const competitiveLinks=[
    { url: "https://codeforces.com/profile/nxllptr", name: "Codeforces" },
    { url: "https://cses.fi/user/432740", name: "CSES" },
    { url: "https://leetcode.com/u/nxllptr/", name: "LeetCode" },
    { url: "https://tryhackme.com/p/nxllptr", name: "TryHackMe" }
  ]

  return (
    <>
      <Header />

      <div className="px-6 md:px-10 lg:px-12 py-4 md:py-6 lg:py-8">
        <Container>
          <h1 className="text-2xl font-fancy mb-2 text-blue-100">Welcome to nxllptr!</h1>
          <p className="mx-3 my-4">
            <Quote quote="You have no one to impress other than your 10 year old self." author="Realization"/>
          </p>
          <p>
            Congratulations on finding my profile! This site serves as a hub for all things related to me.
          </p>
        </Container>

        <Container>
          <h1 className="text-2xl font-fancy mb-2 text-blue-100">Find Me Elsewhere</h1>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:align-items sm:justify-evenly sm:gap-4">
            <div className="m-2">
              <h1 className="font-fancy text-lg text-blue-100">Socials</h1>
              <ul className="list-disc list-inside">
                {socialLinks.map((social, i) => (
                  <li key={i}>
                    <a href={social.url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-2">
              <h1 className="font-fancy text-lg text-blue-100">Code</h1>
              <ul className="list-disc list-inside">
                {codeLinks.map((c, i) => (
                  <li key={i}>
                    <a href={c.url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-2">
              <h1 className="font-fancy text-lg text-blue-100">Competitive</h1>
              <ul className="list-disc list-inside">
                {competitiveLinks.map((c, i) => (
                  <li key={i}>
                    <a href={c.url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        <p className="text-sm text-blue-300 mt-8 text-center">
          Last updated: June 2026
        </p>
      </div>
    </>
  )
}

export default App