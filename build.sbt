name := "Trello"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  "com.google.inject" % "guice" % "3.0"
)     

play.Project.playJavaSettings

resolvers += (
  "JBoss repository" at "https://repository.jboss.org/nexus/content/repositories/"
  )