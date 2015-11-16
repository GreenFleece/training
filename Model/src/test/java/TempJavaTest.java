package com.greenfleece;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class TempJavaTest {

    private TempJava expected;

    @Before
    public void setUp() {
        expected = new TempJava("foo");
    }

    @Test
    public void testSomething() {
        assertNotNull(expected);
        assertNotNull(expected.getSomething());
    }

}
