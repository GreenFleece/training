package com.greenfleece

import org.junit.Assert._
import org.junit.{Before, Test}
;

class TempScalaTest {
  private var expected: TempJava = null

  @Before def setUp {
    expected = new TempJava("foo")
  }

  @Test def testSomething {
    assertNotNull(expected)
    assertNotNull(expected.getSomething)
  }
}
