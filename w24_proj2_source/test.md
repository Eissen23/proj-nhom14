
> cs255_proj2@1.0.0 test
> mocha



  Messenger
    functionality
      âœ” imports a certificate without an error
      âœ” generates an encrypted message without error
      âœ” bob can recieve an encrypted message from alice (46ms)
      âœ” cannot find identical messages with identical ciphertexts (45ms)
      âœ” cannot find ciphertext that contains plaintext
test
      âœ” alice and bob can have a conversation (88ms)
      1) the government can decrypt an encrypted message from alice
      âœ” certificates with invalid signatures are rejected
      âœ” message replay attacks are detected (49ms)
      âœ” alice rejects messages where she is not intended recipient (47ms)
      âœ” alice can send Bob a stream of messages with no response from Bob (72ms)
test
test
test
      âœ” alice can send Bob a stream of messages with infrequent responses from Bob (154ms)
      âœ” alice can receive multiple certificates without error
      âœ” alice can send messages to multiple parties (108ms)
      âœ” alice can receive messages from multiple parties (86ms)
      âœ” alice can initiate one conversation as first sender, another as first receiver (94ms)
test
test
test
      âœ” alice can have simultaneous and separate conversations with Bob, Claire, and Dave (221ms)
      2) the government can decrypt simultaneous conversations
      3) EXTRA CREDIT: handles shuffled messages in single stream
test
test
      4) EXTRA CREDIT: handles messages where shuffling occurs around DH ratchet steps


  16 passing (1s)
  4 failing

  1) Messenger
       functionality
         the government can decrypt an encrypted message from alice:
     OperationError: The operation failed for an operation-specific reason
      at AESCipherJob.onDone (node:internal/crypto/util:466:19)

  2) Messenger
       functionality
         the government can decrypt simultaneous conversations:
     OperationError: The operation failed for an operation-specific reason
      at AESCipherJob.onDone (node:internal/crypto/util:466:19)

  3) Messenger
       functionality
         EXTRA CREDIT: handles shuffled messages in single stream:
     OperationError: The operation failed for an operation-specific reason
      at AESCipherJob.onDone (node:internal/crypto/util:466:19)

  4) Messenger
       functionality
         EXTRA CREDIT: handles messages where shuffling occurs around DH ratchet steps:
     OperationError: The operation failed for an operation-specific reason
      at AESCipherJob.onDone (node:internal/crypto/util:466:19)



