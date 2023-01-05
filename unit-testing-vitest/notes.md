// Run IF

    import { assert, test } from 'vitest'

    const isDev = process.env.NODE_ENV === 'development'

    test.runIf(isDev)('dev only test', () => {
    // this test only runs in development
    })

// Test Only

    import { assert, test } from 'vitest'

    test.only('test', () => {
    // Only this test (and others marked with only) are run
    assert.equal(Math.sqrt(4), 2)
    })
