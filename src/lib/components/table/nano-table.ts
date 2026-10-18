import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface TableColumn {
  header: string;
  key: string;
  filter?: string;
  sort?: 'asc' | 'desc' | null;
  render?: (value: any) => string | HTMLElement;
}

@Component({
  selector: 'nano-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './nano-table.html',
  styleUrl: './nano-table.css',
})
export class NanoTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Output() rowClicked = new EventEmitter<any>();

  filteredData: any[] = [];

  ngOnInit(): void {
    this.filteredData = [...this.data];
  }

  applyFilters(): void {
    this.filteredData = this.data.filter(row => {
      return this.columns.every(col => {
        if (col.filter && col.filter !== '') {
          const value = String(row[col.key]).toLowerCase();
          return value.includes(col.filter.toLowerCase());
        }
        return true;
      });
    });
  }

  sortBy(key: string): void {
    const lastSort = this.columns.find(c => c.key === key)?.sort;
    const newSort = lastSort === 'asc' ? 'desc' : 'asc';

    this.columns = this.columns.map(col => {
      if (col.key === key) {
        return { ...col, sort: newSort };
      }
      return col;
    });

    this.filteredData.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA < valB) return newSort === 'asc' ? -1 : 1;
      if (valA > valB) return newSort === 'asc' ? 1 : -1;
      return 0;
    });
  }

  onRowClick(row: any): void {
    this.rowClicked.emit(row);
  }

  onFilterChange(key: string, value: string): void {
    const col = this.columns.find(c => c.key === key);
    if (col) {
      col.filter = value;
      this.applyFilters();
    }
  }

  isHTMLElement(value: any): boolean {
    return value instanceof HTMLElement;
  }
}
