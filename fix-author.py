#!/usr/bin/env python3

import re
import sys

# Read the mailmap content - more comprehensive mapping
mailmap_content = """avinashsinghrathore1206@gmail.com <ramyapadala192@gmail.com> PADALA RAMYA
116298982+avinashrajputt@users.noreply.github.com <ramyapadala192@gmail.com> PADALA RAMYA
avinashrajputt1 avinashsinghrathore1206@gmail.com <ramyapadala192@gmail.com> PADALA RAMYA
avinashrajputt1 avinashsinghrathore1206@gmail.com <ramyapadala192@gmail.com>
avinashrajputt1 avinashsinghrathore1206@gmail.com PADALA RAMYA <ramyapadala192@gmail.com>
avinashrajputt1 <ramyapadala192@gmail.com> PADALA RAMYA
Avinash Kumar Singh <116298982+avinashrajputt@users.noreply.github.com> PADALA RAMYA <ramyapadala192@gmail.com>"""

# Write to .mailmap file
with open('.mailmap', 'w') as f:
    f.write(mailmap_content)

print("Updated .mailmap file to rewrite all commit authors")
