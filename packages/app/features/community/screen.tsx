import { Anchor, Button, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'

import { Navbar } from 'app/components/Navbar'

export function CommunityScreen() {

  return (
    <>
    <YStack bg='$background3' f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 color='$categoryYellow' ta="center">Community</H1>
      </YStack>
    </YStack>
    <Navbar/>
    </>
  )
}