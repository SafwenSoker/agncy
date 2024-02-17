import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Item } from './item/item.component'
import { Work } from './work/work.component'
import { Statistic } from './statistic/statistic.component'
import { Author } from './author/author.component'
import { Link } from './link/link.component'
import { Client } from './client/client.component'
import { Tag } from './tag/tag.component'
import { Service } from './service/service.component'

@NgModule({
  declarations: [Item, Work, Statistic, Author, Link, Client, Tag, Service],
  imports: [CommonModule, RouterModule],
  exports: [Item, Work, Statistic, Author, Link, Client, Tag, Service],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
