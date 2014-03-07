name := "Taskim"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  "com.google.inject" % "guice" % "3.0",
   "org.mongojack" %% "play-mongojack" % "2.0.0-RC2",
   "org.mongojack" % "mongojack" % "2.1.0-SNAPSHOT"
)

play.Project.playJavaSettings

resolvers += (
  "JBoss repository" at "https://repository.jboss.org/nexus/content/repositories/"
  )

resolvers += (
    "sonatype-nexus-snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"
  )

  seq(jasmineSettings : _*)

  appJsDir <+= baseDirectory / "public"

  appJsLibDir <+= baseDirectory / "public/library"

  jasmineTestDir <+= baseDirectory / "test/JavascriptTests"

  jasmineConfFile <+= baseDirectory / "test/JavascriptTests/test.dependencies.js"

  (test in Test) <<= (test in Test) dependsOn (jasmine)

