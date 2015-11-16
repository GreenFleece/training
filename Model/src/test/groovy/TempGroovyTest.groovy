package com.greenfleece;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

class TempGroovyTest {

    TempGroovy expected

    @Before
    void setUp() {
        expected = new TempGroovy(something: "foo")
    }

    @Test
    void testSomething() {
        assertNotNull(expected)
        assertNotNull(expected.something)
    }

}